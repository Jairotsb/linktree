interface buttonProps {
 switchTheme: () => void;
 theme: boolean;
}

import { Moon, Sun } from '@phosphor-icons/react';
import styles from './ThemeButton.module.css'; 

export function ThemeButton(props: buttonProps) {
    return(
        <button onClick={props.switchTheme} className={styles.themeButton}>{props.theme ? <Sun size={24}/> : <Moon size={24}/>}</button>
    );
}