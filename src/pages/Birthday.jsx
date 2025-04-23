
export default function Birthday() {
  return (
    <div className="p-4 max-w-2xl mx-auto text-left space-y-6">
      <h1 className="text-2xl font-bold text-rose-600">🎉 小鞠的生日纪念</h1>

      <section>
        <h2 className="text-lg font-semibold text-rose-500">🎂 2025.02.28 - 19岁生日</h2>
        <p>我写下了一封长信，祝她19岁生日快乐，回忆起初识的瞬间，感谢她一直以来的陪伴。</p>
        <p>我送了她一只Jellycat熊，告诉她：“第一只Jellycat要送给生命中最重要的人”。</p>
        <p>我对她说：“希望你可以永远当一个乐观开朗的女孩，不要因为遇到挫折而感到悲观，给自己一些小期待，享受当下。”</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-rose-500">🎁 生日礼物</h2>
        <ul className="list-disc pl-6">
          <li>Jellycat 小熊（寓意：一辈子守护）</li>
          <li>信件《致小鞠的一封信》</li>
          <li>Suki 日记中留存的生日贴纸与留言</li>
        </ul>
      </section>
    </div>
  );
}
