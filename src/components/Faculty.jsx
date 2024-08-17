import React from "react";
import styles from "./Faculty.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Sample data for faculties
const facultyList = [
  {
    name: "Dr. John Doe",
    title: "Professor of Computer Science",
    description:
      "Expert in Artificial Intelligence, Machine Learning, and Data Science.",
    image: "manager.jpeg",
    experience: "15 years of teaching and research experience in AI and ML.",
  },
  {
    name: "Dr. Jane Smith",
    title: "Professor of Electrical Engineering",
    description:
      "Specialist in Power Systems, Renewable Energy, and Electrical Machines.",
    image: "manager.jpeg",
    experience:
      "20 years of experience in electrical power systems and renewable energy.",
  },
  {
    name: "Dr. Emily White",
    title: "Professor of Mechanical Engineering",
    description: "Focuses on Robotics, Automation, and Thermodynamics.",
    image: "manager.jpeg",
    experience:
      "12 years of research and practical experience in robotics and automation.",
  },
  {
    name: "Dr. Mark Brown",
    title: "Professor of Civil Engineering",
    description:
      "Expert in Structural Engineering, Environmental Engineering, and Construction Management.",
    image: "manager.jpeg",
    experience:
      "18 years of experience in structural and environmental engineering.",
  },
  {
    name: "Dr. Sarah Green",
    title: "Professor of Chemical Engineering",
    description:
      "Specializes in Chemical Reaction Engineering, Process Design, and Environmental Engineering.",
    image: "manager.jpeg",
    experience:
      "14 years of expertise in chemical reaction engineering and process design.",
  },
  {
    name: "Dr. David Lee",
    title: "Professor of Aerospace Engineering",
    description:
      "Expert in Aircraft Design, Aerodynamics, and Spacecraft Engineering.",
    image: "manager.jpeg",
    experience:
      "17 years of experience in aerospace engineering and aircraft design.",
  },
  {
    name: "Dr. Laura Turner",
    title: "Professor of Biomedical Engineering",
    description:
      "Focuses on Medical Devices, Tissue Engineering, and Biomechanics.",
    image: "manager.jpeg",
    experience:
      "10 years of research and development experience in biomedical devices.",
  },
  {
    name: "Dr. Robert Wilson",
    title: "Professor of Environmental Science",
    description:
      "Specializes in Ecosystem Management, Climate Change, and Sustainable Development.",
    image: "manager.jpeg",
    experience:
      "15 years of experience in environmental science and climate change research.",
  },
];

function Faculty() {
  return (
    <div className={styles.maindiv}>
      <Typography className={styles.heading}>Faculties</Typography>
      <div className={styles.cardContainer}>
        {facultyList.map((faculty, index) => (
          <Card key={index} className={styles.card}>
            <CardMedia
              className={styles.cardMedia}
              image={faculty.image}
              title={faculty.name}
            />
            <br />
            <br />
            <br />
            <br />
            <CardContent className={styles.cardContent}>
              <Typography className={styles.cardTitle}>
                {faculty.name}
              </Typography>
              <br />
              <Typography className={styles.cardSubtitle}>
                {faculty.title}
              </Typography>
              <br />
              <Typography className={styles.cardExperience}>
                {faculty.experience}
              </Typography>
              <br />
              <Typography className={styles.cardDescription}>
                {faculty.description}
              </Typography>
            </CardContent>
            {/* <CardActions className={styles.cardActions}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
