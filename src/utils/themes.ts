export const getThemeStyles = (theme: string) => {
  const isDark = theme === 'dark';

  return {
    primaryText: isDark ? 'text-white' : 'text-gray-900',
    subText: isDark ? 'text-[#a7a7a7]' : 'text-gray-500',
    cardBg: isDark ? 'bg-[#181818] hover:bg-[#282828]' : 'bg-gray-100 hover:bg-gray-200/70',
    borderStyle: isDark ? 'border-transparent' : 'border border-gray-200/50',
    playBtnAccent: isDark ? 'bg-[#b026ff]' : 'bg-[#5d00b3]',
    playIconColor: isDark ? 'text-black' : 'text-white',
    playIconFill: isDark ? 'black' : 'white',
    eyeIconColor: isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black',
    borderHeader: isDark ? 'border-white/5' : 'border-gray-200'
  };
};