// TODO: 보여주기용 더미 데이터 — 실제 내용으로 교체 예정
// id는 클릭 수 저장 키로 쓰이므로, 한 번 정한 뒤에는 바꾸지 않습니다.
export const links = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];

export type Link = (typeof links)[number];

export const linkIds = new Set(links.map((link) => link.id));
