import React, { useState } from 'react';
import PC_Fifth from './PC_Fifth';
import PC_Saving_First from './Saving/PC_Saving_First';
import PC_Saving_Second from './Saving/PC_Saving_Second';
import PC_Saving_Third from './Saving/PC_Saving_Third';

export default function PC_Toggle() {
  const [selected, setSelected] = useState('saving');
  return (
    <div>
      <PC_Fifth selected={selected} setSelected={setSelected} />
      {selected === 'saving' && (
        <div>
          <PC_Saving_First />
          <PC_Saving_Second />
          <PC_Saving_Third />
        </div>
      )}
    </div>
  );
}
