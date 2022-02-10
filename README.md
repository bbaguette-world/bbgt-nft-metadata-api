# 해당 프로젝트는?

NFT를 "민팅하기 전", 또는 "민팅하는 중" 어쩔 수 없이 `baseURI`나 `tokenURI`가 공개됩니다.

그때 `tokenURI`가 `{example.com}/1`과 같다면 사용자는 쉽게 다음 뽑히는 NFT를 확인 가능하고 구매할지 말지 결정 가능합니다 (랜덤 뽑기의 맛이 사라지죠)

그래서 ERC721의 `totalSupply()` 를 확인한 후, "이미 판매된" NFT의 메타데이터만 응답하는 서버를 만들었습니다.
- 그래서 `baseURI`를 해당 metadata-api로 설정합니다.
- 만약 전체 판매가 완료됬다면, `baseURI`를 IPFS의 주소로 변경해도 됩니다! 
