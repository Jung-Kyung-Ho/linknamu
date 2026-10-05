import { MongoClient } from "mongodb";

export type ClickDoc = { _id: string; count: number };

// 개발 모드의 핫 리로드마다 새 연결이 생기지 않도록 전역에 캐시합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
  }
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
