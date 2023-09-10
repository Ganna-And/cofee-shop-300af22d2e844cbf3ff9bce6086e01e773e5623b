
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export function useTranslations() {
  const language = useSelector((state: RootState) => state.language.language);
  const translations = useSelector((state: RootState) => state.language.translation);

  return {
    language,
    translations,
  };
}
