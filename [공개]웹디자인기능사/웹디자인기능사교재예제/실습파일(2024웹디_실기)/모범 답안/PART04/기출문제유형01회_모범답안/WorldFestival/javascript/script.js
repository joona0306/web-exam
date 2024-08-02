// JavaScript Document

// jQuery를 사용하여 문서가 준비되면 함수 실행
jQuery(document).ready(function () {
  // 네비게이션 메뉴 항목에 마우스를 올리면 서브메뉴 슬라이드 다운
  $(".navi > li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // 처음에는 첫 번째 이미지를 제외한 모든 이미지를 숨김
  $(".imgslide a:gt(0)").hide();

  // 이미지 슬라이드 쇼를 시작하는 함수 정의
  function slideShow() {
    // 첫 번째 이미지를 페이드 아웃
    $(".imgslide a:first-child")
      .fadeOut(1000) // 1초 동안 페이드 아웃
      .next("a") // 다음 이미지를 선택
      .fadeIn(1000) // 1초 동안 페이드 인
      .end() // 현재 선택된 항목을 종료하고 첫 번째 이미지로 돌아감
      .appendTo(".imgslide"); // 첫 번째 이미지를 마지막으로 이동

    // 3초 후에 slideShow 함수를 다시 호출
    setTimeout(slideShow, 3000);
  }

  // 슬라이드 쇼 시작
  slideShow();

  // 공지사항 첫 번째 항목 클릭 시 모달 활성화
  $(".notice li:first").click(function () {
    // 모달에 'active' 클래스를 추가하여 모달을 표시
    $("#modal").addClass("active");
  });

  // 모달 닫기 버튼 클릭 시 모달 비활성화
  $(".btn").click(function () {
    // 모달에서 'active' 클래스를 제거하여 모달을 숨김
    $("#modal").removeClass("active");
  });
});
