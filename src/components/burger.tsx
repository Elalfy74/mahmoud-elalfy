import { Dispatch, SetStateAction } from 'react';

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const Burger = ({ active, setActive }: Props) => {
  const styles =
    'bg-main rounded-md h-1 my-[4px] transition-all duration-[400ms] ease-in-out dark:bg-second';

  return (
    <label
      htmlFor='check'
      className='flex flex-col w-[40px] cursor-pointer scale-[55%] '
    >
      <input
        type='checkbox'
        id='check'
        checked={active}
        onChange={() => setActive(!active)}
        className={active ? 'active hidden' : 'hidden'}
      />
      <span className={`w-1/2 ${styles}`}></span>
      <span className={`w-full ${styles}`}></span>
      <span className={`w-1/2 ${styles}`}></span>
    </label>
  );
};
