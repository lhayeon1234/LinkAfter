### 1. 네이밍 규칙

- 사용자에게 최종으로 보여지는 화면은 Screen으로 분류 하며, Screen을 뒤에 붙여 구분한다.
- component는 용도를 쉽게 파악할 수 있도록 한다.
  여기서 사용된 Link는 사용자가 저장한 링크를 뜻한다.
  한 개의 Link는 URL 주소와 알람이 설정된 아이템 자체다.
  일반적으로 사용하는 Link와 혼용된다.
  List는 List와 ListItem으로 구성되며 앞에 무엇에 대한 List인지 작성해준다
  예 : LinkList, LinkListItem, AlarmList, AlarmListItem

### 2. 구조 잡기

```
screens
탭 Screen

- HomeScreen
  |- AddFolderButton : folder 추가 버튼
  |- AddLinkButton : Link 추가 버튼
  |- ListView : 폴더/링크 리스트
  |- FolderListItem : 폴더 내부로 이동
  |- LinkListItem : 링크 한개
    |- LinkImage : 링크에 첨부된 썸네일
    |- LinkTitle: 링크의 제목
    |- LinkUrl : 링크 주소
- SearchScreen
  |- SearchInput : 검색어 입력 태그
  |- SearchButton : 검색 버튼
  |- SearchWordList : 최근 검색어 list
  |- SearchWord : 최근 검색어
  |- SearchWordDeleteButton : 최근 검색어 삭제 버튼
  |- ListView : 링크 리스트 ( HomeScreen 참고 )
- AlarmScreen
  |- AlarmList : 알람 버튼 리스트
  |- AlarmItem : 알람 버튼
  |- DeleteAlarmButton : 알람 내용 삭제 버튼
- SettingScreen [ 구체화 필요]
  |-

그외 필요한 Screen

- EditLinkScreen : Link 상세 보기 추가/편집 화면
  |- LinkInput : 링크 입력
  |- TitleInput : 제목 입력
  |- AlarmAccordionButton : 알람 리스트 확장 버튼
    |- AlarmSection : 알람시간 확장화면
      |- alarmSelectTab : 커스텀 알람/ 구체시간 설정
      |- AlarmList : 알람 버튼 리스트(AlarmScreen 참고) 커스텀 알람 Tab
      |- NewAlarmSection : 알람 버튼 이외 날짜/시간 설정 화면(EditAlarmScreen 참고)
  |- SelectFolderButton : 폴더 지정 (추가 필요)
  |- ShareButton : 공유 버튼
  |- SaveButton : 저장 버튼
  |- CancelButton : 취소 버튼
  |- DeleteButton : 삭제 버튼
- EditAlarmScreen [ 구체화 필요]
  |- SelectDay
  |- SelectHour
  |- SelectMinute
  |- SelectRepeat
```
