import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kanさぽ|関大生専用の時間割アプリ</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div>
        <div className="kansapo-page">
          <div className="header-logo">
            <img src="/icon.png" alt="アプリロゴ" className="app-logo"></img>
            <h1 className="app-name">Kanさぽ</h1>
          </div>
          <div className="pc-flex">
            <div className="app-image">
              <div>
                <img
                  src="./screenshot_1.jpg"
                  alt="モックアップ画像_1"
                  className="app-image_1"
                ></img>
              </div>
              <div className="setmargin">
                <img
                  src="./screenshot_2.jpg"
                  alt="モックアップ画像_2"
                  className="app-image_2"
                ></img>
              </div>
            </div>
            <div className="flex-column">
              <div className="app-text">
                <h2 className="app-detail-1">関大生専用の</h2>
                <h2 className="app-detail-2">時間割アプリ！</h2>
                <p className="app-detail-3">
                  科目名で授業を検索し簡単に授業を追加！
                  <br />
                  メモや欠席回数のカウントなど便利な機能が多数搭載！
                </p>
              </div>

              <div className="download">
                <a
                  href="https://apps.apple.com/jp/app/kan%E3%81%95%E3%81%BD/id1542010871"
                  className="apple"
                ></a>
              </div>
              <div className="app-detail-4">
                <p>※現在は商学部生専用となっております。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
     

      
        .kansapo-page{
          width: 100%;
          background-color: white;
          padding-bottom: 40px;
  
        }
        .header-logo {
          padding-left: 8px;
          padding-top: 8px;
          padding-bottom: 24px;
          display: flex;
          text-align: left;
        }

        .app-logo{
          width:60px;
          height:60px;
        }

        .app-name{
          margin-top:10px;
          margin-left:10px;
        
        }

        .pc-flex{
          display: flex;
          justify-content: space-between;
          margin-right:180px;
        }

        .app-image{
          display:flex;
        }

        .app-image_1{
          width:250px;
          height:500px
        }
        .app-image_2{
          width:250px;
          height:500px
        }

        .setmargin{
          margin-top:50px
        }

        .flex-column{
          flex-direction:column;
          margin-top:30px;
        }

        .apple{
          display:inline-block;
          overflow: hidden;
          width: 135px;
          height: 40px;
          background-image: url("https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2012-05-16&amp;kind=iossoftware&amp;bubble=ios_apps");
        }
        

        .app-image{
          margin:0 auto;
        }

        .app-text{
          margin:16px,24px,32px;
        }

        .app-detail-1{
          font-size:40px;
          letter-spacing: 18px;
          margin: 0;
        }

        .app-detail-2{
          font-size:30px;
          margin: 0;
          letter-spacing: 18px;
          margin-left: 40px;
          margin-bottom: 30px;
        }

        .app-detail-3{
          line-hright:2px;
          margin-bottom:70px;
          letter-spacing: 1px;
        }

        .app-detail-4{
          text-align:right;
          
        }

        .download{
          
          margin-bottom:70px;
        }


        @media screen and (max-width: 959px){
          .kansapo-page{
            height:130vh;
          }

        .pc-flex{
          display:flex;
          flex-direction: column;
          margin-right:0;
        }

        .flex-column{
          width:450px;
          margin-top:0;
        }

        .app-text{
         width:480px
        }

        .app-detail-1{
          font-size: 40px;
          margin-left:15px;

        }
        .app-detail-2{
          margin-left:100px;
          font-size: 35px;
          margin-top:10px
        }

        .app-detail-3{
          
          margin-left:15px;
        }

        .app-detail-4{
          text-align:center;
          margin-left:50px
        }

        .download{
          margin-left:40px;
          text-align:center;
          width:400px;
        }

        .apple{
          display:inline-block;
          overflow: hidden;
          width: 135px;
          height: 40px;
        }



      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
