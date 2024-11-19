const downloadBtn = document.getElementById("download-btn");
const loader = document.getElementById("loader");

downloadBtn.addEventListener("click", (event) => {
    // 로딩 애니메이션 활성화
    event.preventDefault(); // 기본 다운로드 동작 방지
    downloadBtn.classList.add("loading");
    loader.classList.remove("hidden"); // 로딩 애니메이션 표시

    // 다운로드 완료 시 로딩 애니메이션 제거 (임의의 지연 추가)
    setTimeout(() => {
        downloadBtn.classList.remove("loading");
        loader.classList.add("hidden"); // 로딩 애니메이션 숨기기
        window.location.href = "README.md"; // 실제 파일 다운로드 실행
    }, 3000); // 3초 대기
});
