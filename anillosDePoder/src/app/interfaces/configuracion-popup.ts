import { ButtonSeverity } from 'primeng/button';

export interface ConfiguracionPopup {
  message: string;
  nameButton: string;
  severity: ButtonSeverity;
  header?: string;
}
