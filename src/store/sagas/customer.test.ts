import * as saga from './customer';



it('should call customerWatcherSaga', () => {
  const gen = saga.customerWatcherSaga();
  gen.next();

  expect(gen.next().done).toBeTruthy();
});


it('should call customerWorkerSaga Success', () => {

  const gen = saga.customerWorkerSaga();
  gen.next(true);
  gen.next(true);
  gen.next(true);
  expect(gen.next().done).toBeTruthy();
});

it('should call customerWorkerSaga Failure', () => {

  const gen = saga.customerWorkerSaga();

  console.log('CP1', gen.next(false).value);
  expect(gen.next().done).toBeFalsy();
});
