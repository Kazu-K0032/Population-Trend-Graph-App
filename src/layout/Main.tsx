import PrefList from "../feature/front/PrefList";

export default function Main() {
  return (
    <div>
      <main className="l-main">
        <div className="l-main__inner">
          <div className="l-sectionWrap">
            <section className="l-section">
              <h2 className="c-mainTtl">都道府県</h2>
              <PrefList />
            </section>
            <section className="l-section">
              <h2 className="c-mainTtl">グラフ</h2>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
