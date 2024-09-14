import { CiSearch } from 'react-icons/ci';
import { CgBell } from 'react-icons/cg';
import { colors } from '@/styles';
import { Images } from '@/lib';
import { useState } from 'react';
import { AvatarComponent, InputClear } from '.';

const TopNavigationBar = () => {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-row items-center justify-between bg-neutral-4 rounded-2xl py-3 px-3 gap-4">
      <CiSearch color={colors['neutral-2']} size={24} />
      <InputClear
        value={value}
        onChange={setValue}
        className="text-neutral-2"
        inputProps={{
          type: 'search',
          placeholder: 'Search',
        }}
      />
      <CgBell color={colors['neutral-2']} size={24} />
      <AvatarComponent src={Images.avatar} alt="RV" avatarClassName="object-cover h-10 w-10" />
    </div>
  );
};

export { TopNavigationBar };
