import { useOutletContext } from 'react-router-dom';
import { TPodcast } from 'core/services/podcast';

type ContextType = { podcast: TPodcast | null };

export function useOutletPodcast() {
  return useOutletContext<ContextType>();
}
