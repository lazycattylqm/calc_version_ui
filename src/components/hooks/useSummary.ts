import { useSetAtom, useAtomValue } from 'jotai';
import { Modal } from 'antd';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import {
  gitOwnerAtom,
  gitRepoAtom,
  envAtom,
  dateAtom,
  currentStepAtom,
} from '../../store/atoms';

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

    // wk: 计算是本年第几周（1月1日所在的周为第1周）
    const yearStart = dayjs(selectedDate.format('YYYY') + '-01-01');
    const dayOfYearNum = selectedDate.dayOfYear();
    const yearStartDay = yearStart.day(); // 0 (Sunday) to 6 (Saturday)

    // 计算周数：(当前天数 + 1月1日是星期几 - 1) / 7，向上取整
    const weekNumber = Math.ceil((dayOfYearNum + yearStartDay) / 7);
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
      onOk: () => {
        console.log('Summary submitted:', {
          gitOwner,
          gitRepo,
          env,
          date,
          version,
          branch: `release/${version}`,
        });
        // 暂时不做任何事情
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
