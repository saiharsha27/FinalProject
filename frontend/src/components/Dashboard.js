import React from 'react';

const Dashboard = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Clean Energy Innovations</h1>
        <p className="text-muted">Advancing Sustainability in Emerging Economies</p>
      </div>
      <div className="card shadow-lg p-5">
        <h2 className="card-title mb-4 text-primary">Overview</h2>
        <p className="lead">
          Emerging and developing economies (EMDEs) are pivotal in addressing climate challenges by fostering clean energy innovation. With growing energy demands, these economies are instrumental in advancing global clean energy transitions. Innovations in renewable energy, efficiency, and storage are crucial to reducing greenhouse gas emissions and achieving net-zero targets.
        </p>
        <p>
          However, innovation systems in EMDEs face hurdles such as limited funding, inadequate research infrastructure, and weak intellectual property enforcement. Policies promoting energy innovation have proven effective, especially when they combine sustained R&D investment, knowledge sharing, market incentives, and broad socio-political support.
        </p>
        <p>
          Case studies in countries like India, Brazil, and Morocco demonstrate diverse approaches to clean energy development, from leveraging local expertise to fostering international collaborations. For example, India excels in energy efficiency, while Morocco has pioneered renewable energy integration. Despite challenges, EMDEs show significant potential by aligning their energy strategies with economic and environmental goals.
        </p>
        <div className="bg-light rounded p-3 my-4">
          <p>
            <strong>For further details:</strong>{" "}
            <a
              href="https://www.iea.org/reports/clean-energy-innovation-policies-in-emerging-and-developing-economies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fw-bold"
            >
              IEA Clean Energy Innovation Policies
            </a>
          </p>
        </div>
        <footer className="text-muted mt-4">
          <small>
            Citation: IEA (2024), Clean Energy Innovation Policies in Emerging and Developing Economies, IEA, Paris{" "}
            <a
              href="https://www.iea.org/reports/clean-energy-innovation-policies-in-emerging-and-developing-economies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              https://www.iea.org/reports/clean-energy-innovation-policies-in-emerging-and-developing-economies
            </a>
            , Licence: CC BY 4.0.
          </small>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
