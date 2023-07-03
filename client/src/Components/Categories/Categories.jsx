import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://media.istockphoto.com/id/1005850178/photo/hindu-mythology-god-lord-ganesha-souvenir-made-by-creative-and-skillful-sculptor.jpg?s=612x612&w=0&k=20&c=wIJFiFWN2mtX0lAsJWLN_kspy-pwyc8ua3OWSJP6q9Q="
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://media.istockphoto.com/id/1446054853/photo/beautiful-necklaces-handicrafts-on-display-at-jaisalmer-rajasthan-india.jpg?s=612x612&w=0&k=20&c=pV3-Guhkhze2iav1frD3iH-zUV3lpY31544Hz7WWEXc="
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://media.istockphoto.com/id/470632984/photo/the-dance-diety-statuette.jpg?s=612x612&w=0&k=20&c=sYQn38Pgl27gkL46v5uDUo_llsinUkBKYdIjTIUbfCc="
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.istockphoto.com/id/450161311/photo/buddha-face.jpg?s=612x612&w=0&k=20&c=Ea1HG_T_GwjOEn1EXudcg0Jw_Ptfb5XKiPOKtUmcH3o="
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://media.istockphoto.com/id/482763974/photo/vintage-pottery-isolated-over-a-white-background.jpg?s=612x612&w=0&k=20&c=by84bz42WbZ5EhWAYRfxIlKNr7GVfyq-dzbRbzMlBOE="
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.istockphoto.com/id/522548682/photo/marajoara-pot.jpg?s=612x612&w=0&k=20&c=pIsJUD583t_qWRrFd-ZsicrXpopeyOOnQfC9j6N2QPs="
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;