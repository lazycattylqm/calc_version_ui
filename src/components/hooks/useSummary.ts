import { useSetAtom, useAtomValue } from 'jotai';
import { Modal, message } from 'antd';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import {
  gitOwnerAtom,
  gitRepoAtom,
  envAtom,
  dateAtom,
  currentStepAtom,
} from '../../store/atoms';
import { createBranch } from '../../services/api';

dayjs.extend(dayOfYear);

export const useSummary = () => {
  const gitOwner = useAtomValue(gitOwnerAtom);
  const gitRepo = useAtomValue(gitRepoAtom);
  const env = useAtomValue(envAtom);
  const date = useAtomValue(dateAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const calculateVersion = () => {
    if (!date || !env) return 'N/A';

    const selectedDate = dayjs(date);

    // yymm: 年份后两位 + 月份（补零）
    const yy = selectedDate.format('YY');
    const mm = selectedDate.format('MM');
    const yymm = yy + mm;

    // wk: 计算当月的第几周（当月从1号开始为第1周，周以周日为一周起始）
    const dayOfMonth = selectedDate.date(); // 1-31
    const monthStart = dayjs(selectedDate.format('YYYY') + '-' + selectedDate.format('MM') + '-01');
    const monthStartDay = monthStart.day(); // 0 (Sunday) to 6 (Saturday)

    // 计算当月周数：(当前日 + 当月1日是星期几) / 7，向上取整
    const weekNumber = Math.ceil((dayOfMonth + monthStartDay) / 7);
    const wk = weekNumber.toString().padStart(2, '0');

    // env: sde3 -> 3, sde4 -> 4
    const envNum = env === 'sde3' ? '3' : '4';

    return `${yymm}.${wk}.${envNum}`;
  };

  const version = calculateVersion();

  const handleSubmit = () => {
    Modal.confirm({
      title: 'Confirm Submission',
      content: `Are you sure you want to submit the summary? with create Branch release/${version} on ${gitOwner}/${gitRepo}`,
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk: async () => {
        try {
          const response = await createBranch({
            owner: gitOwner,
            repo: gitRepo,
            date,
            env,
            version,
          });

          console.log('Summary submitted:', {
            gitOwner,
            gitRepo,
            env,
            date,
            version,
            branch: `release/${version}`,
            response,
          });

          message.success('Branch created successfully!');
        } catch (error) {
          console.error('Failed to create branch:', error);
          message.error('Failed to create branch. Please try again.');
        }
      },
    });
  };

  const handleBack = () => {
    setCurrentStep('date');
  };

  return {
    gitOwner,
    gitRepo,
    env,
    date,
    version,
    handleSubmit,
    handleBack,
  };
};
