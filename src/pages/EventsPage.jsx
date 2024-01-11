import React from "react";
import "../pages/EventsPage.css";
import Footer from "../components/Footer";

export default function EventsPage() {
    return (
      <div>
        <h1>UPCOMING EVENTS</h1>
        <table className="events-table">
        <tbody>
          <tr>
            <td>24 ene 2024</td>
            <td>Sábado 20:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
          <tr>
            <td>27 ene 2024</td>
            <td>Sábado 22:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
          <tr>
            <td>27 ene 2024</td>
            <td>Sábado 22:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
          <tr>
            <td>27 ene 2024</td>
            <td>Sábado 22:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
          <tr>
            <td>27 ene 2024</td>
            <td>Sábado 22:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
          <tr>
            <td>27 ene 2024</td>
            <td>Sábado 22:00hs</td>
            <td>Sala Aranda, Barcelona</td>
            <td><a href="#" target="_blank" rel="noopener noreferrer"><button type="button">Buy tickets</button></a></td>
          </tr>
        </tbody>
      </table>
      <Footer />
      </div>
    );
  }