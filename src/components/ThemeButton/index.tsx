import { changeTheme } from "@/app/actions";

export const ThemeToggle = async () => {
  return (
    <button onClick={() => changeTheme()} aria-label='Toggle Theme'>
      Change theme
    </button>
  );
};
