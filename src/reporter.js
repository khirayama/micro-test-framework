const statuses = {
  SUCCESS: '__SUCCESS',
  FAIL: '__FAIL'
};

export default function report(status, error) {
  if (status == statuses.SUCCESS) {
    console.log('ok');
  } else {
    console.log('ng', error);
  }
}
