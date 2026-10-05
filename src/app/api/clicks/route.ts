import { linkIds } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 반환합니다.
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();

    const counts: Record<string, number> = {};
    for (const id of linkIds) counts[id] = 0;
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다" }, { status: 500 });
  }
}

// body: { id } — 해당 링크의 클릭 수를 1 올리고 갱신된 값을 반환합니다.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다" }, { status: 500 });
  }
}
