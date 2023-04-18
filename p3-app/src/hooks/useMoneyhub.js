import { MoneyhubContext } from './context';
import { useCallback, useContext } from 'react';

export const useMoneyhub = () => {
  const context = useContext(MoneyhubContext);
  if (context === undefined) {
    throw new Error('useMoneyhub must be used within a useMoneyHubProvider');
  }

  const {
    state: { sendAmount, reference },
    dispatch,
  } = useContext(MoneyhubContext);

  const resetContext = useCallback(() => {
    dispatch({ type: 'RESET_CONTEXT', payload: {} });
  }, [dispatch]);

  return {
    sendAmount,
    reference,
  };
};
