import { cn } from '@/utils/cn';
import styles from './tooltip.module.css';

export const Tooltip = (props: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={cn(styles.tooltip, 'relative inline-block')}>
      {props.children}
      <div className={styles.bottom}>
        <h3>{props.title}</h3>
        <i></i>
      </div>
    </div>
  );
};
