import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  useIAP,
  requestPurchase,
  withIAPContext,
  initConnection,
} from 'react-native-iap';
import {storeReceipt} from 'api/product';
import BuyTicket from './components/BuyTicketModal';

const iapScreen = () => {
  const {currentPurchase, finishTransaction, getProducts} = useIAP();

  const purchase = async (): Promise<void> => {
    await requestPurchase('00000') // insert productIdx
      .then(async res => {
        // 영수증 검증 API
        await storeReceipt(
          res.transactionReceipt,
          res.productId,
          res.transactionDate,
          res.transactionId,
        )
          .then(() => {
            // 구매 내역 업데이트 & 영수증 검증 성공
            return;
          })
          .catch(() => {
            // 구매 내역 업데이트 & 영수증 검증 실패
            return;
          });
      })
      .catch(err => {
        console.log('requestPurchase Error', err);
      });
  };

  const getProductF = () => {
    const productIdx = '000000';

    initConnection().then(connected => {
      if (connected) {
        getProducts(productIdx ?? [])
          .then(() => console.log('getProducts Success'))
          .catch(() => console.log('getProducts Error'));
      }
    });
  };

  useEffect(() => {
    const isConsumable = true;

    const checkCurrentPurchase = async purchase => {
      if (purchase) {
        const receipt = purchase.transactionReceipt;

        if (receipt) {
          try {
            const ackResult = await finishTransaction(purchase, isConsumable);
            console.log('ackResult', ackResult);
          } catch (ackErr) {
            console.warn('ackErr', ackErr);
          }
        }
      }
    };

    checkCurrentPurchase(currentPurchase);
  }, [currentPurchase, finishTransaction]);

  return (
    <SafeAreaView>
      <BuyTicket product={selectedProduct} onPress={purchase} />
    </SafeAreaView>
  );
};

export default withIAPContext(iapScreen);
