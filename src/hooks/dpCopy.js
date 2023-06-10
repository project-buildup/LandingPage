export default function doCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('클립보드에 복사되었습니다.');
      })
      .catch(() => {
        alert('복사를 다시 시도해주세요.');
      });
  } else {
    alert('복사하기가 지원되지 않는 브라우저입니다.');
  }
}
