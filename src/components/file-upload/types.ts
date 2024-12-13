import { FileUploadProps } from "@oykos-development/devkit-react-ts-styled-components";

export interface SSSFileUploadProps extends FileUploadProps {
  disabled?: boolean;
  layout?: 'horizontal' | 'vertical';
}
