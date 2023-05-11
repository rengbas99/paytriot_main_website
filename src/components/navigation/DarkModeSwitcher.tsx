import { useTheme } from 'next-themes';
import lightOnAudio from 'public/sounds/Lamp-Switch-On.mp3';
import { useEffect, useState } from 'react';

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  console.log("DarkmodeSwitcher---->",theme)

  useEffect(() => {
    setMounted(true);
    const audio = new Audio(lightOnAudio);
    audio.load();
  }, []);

  const playAudio = () => {
    const audio = new Audio(lightOnAudio);
    audio.play();
  };

  if (!mounted) {
    return null;
  }

  const handleDarkModeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <label htmlFor="darkModeToggle" className="form-check form-switch">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          id="darkModeToggle"
          style={{ cursor: 'pointer', minWidth: '20px' }}
          checked={theme === 'dark'}
          onChange={handleDarkModeToggle}
          onClick={playAudio}
        />
      </label>
    </div>
  );
};

export default DarkModeSwitcher;
