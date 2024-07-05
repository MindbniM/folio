import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* 这里曾经有博客项目，但现在已被清空 */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
