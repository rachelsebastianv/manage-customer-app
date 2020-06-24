import * as saga from './customerSaga';



it('should call customerWatcherSaga', () => {
  const gen = saga.customerWatcherSaga();
  gen.next();
  gen.next();
  gen.next();
  gen.next();

  expect(gen.next().done).toBeTruthy();
});


it('should call customerFetchSaga Success', () => {

  const gen = saga.customerFetchSaga();
  gen.next(true);
  gen.next(true);
  gen.next(true);
  expect(gen.next().done).toBeTruthy();
});

it('should call customerFetchSaga Failure', () => {

  const gen = saga.customerFetchSaga();

  console.log('CP1', gen.next(false).value);
  expect(gen.next().done).toBeFalsy();
});
