# Shoplive

안녕하세요 엄지연입니다!
귀한 시간 아껴드리고 싶어, 구현한 부분 설명 붙임으로 드립니다!
초과된 시간과 완성도를 봤을 때 충격이지만, 그래도 포기하지 않으려 한 만큼만이라도 붙여봅니다.
부족한 부분 다시 한번 돌아보게 됐습니다.
과제 제출의 기회를 주셔서 감사합니다!

## 요구사항체크

- [ ] 위 예시와 동일하게 동작하는 두개의 카드를 만드는 것을 목표로 합니다.
- [ ] 각 카드는 3초간 아무런 액션이 없으면, 자동으로 다음 카드로 전환됩니다.(AUTO TRANSITION)
- [x] 카드를 클릭하면 Alert으로 클릭한 카드의 색상을 보여줍니다.
- [x] 카드는 좌우로 이동할 수 있는 스와이프 기능이 있으며, 마우스로 가능합니다.
- [x] 스와이프 도중 - 드래그 양과 동일하게 카드가 이동해야 하며, opacity 또한 조정되야 합니다.(SWIPE)
- [x] 각 카드의 넓이의 50% 이상 움직인 상태에서 카드를 놓으면, 다음 카드로 전환합니다.(TO RIGHT / LEFT)
- [x] 각 카드의 넓이의 50% 미만으로 움직인 상태에서 카드를 놓으면, 기존 카드로 되돌아갑니다.(CANCEL)
- [ ] 일정속도 이상으로 스와이프 할때에는, 총 드래그 양과 무관하게 다음 카드로 이동합니다.(Flip right / left)

## 구현 의도

1. mousestart, end 이벤트를 사용했습니다. start 지점과 end 지점으로 방향 및 투명도를 조절하였습니다.
2. 컬러 각각의 리스트 index의 번호를 상태로 저장해서 +1 하는 방식으로 index와 state 번호가 일치할때 투명도 0으로 순차적으로 보여주는 방식으로 기능을 구현했습니다.
3. 각 카드의 50%이랑 움직인 상태에서 놓으면 다음 카드로 전환되는 To Left/ right
4. 속도 부분은 처음 마우스의 start 시간과 마지막 end 시간의 차를 구해서 속도를 구했으나, 일정속도의 비교를 고민하고 있었습니다.
5. 자동으로 다음 카드의 경우 캐러셀을 생각했는데, 제가 opacity로 카드를 보여주는 방식에서 조금 더 수정이 필요하다 생각했습니다.

![demo](https://user-images.githubusercontent.com/15992851/195721866-8ccd60f8-384e-4296-94d5-f65e8e8870ad.gif)
