import tw from 'twin.macro';

export const Popup = tw.dialog`relative block`;

export const Button = tw.button`flex gap-x-[6px]`;

export const PopupContent = tw.div`absolute top-[calc(100% + 6px)] border border-gray700 rounded-[4px] px-[10px] py-[15px] bg-white z-POPUP`;
