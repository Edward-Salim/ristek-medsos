import styles from "./page.module.css"

// Need props?
export default function Profile() {
  return (
    <div className="content-container">
      <div className={styles["user-profile"]}>
        <img src="./anonymous.png" className={styles["profile-pic"]}/>
        <h1 className="greetings"><span className="account-name">@Anonymous</span></h1>
      </div>
      <p className={styles["user-desc"]}>Lorem ipsum dolor sit amet consectetur. Leo sit vestibulum lacus facilisis accumsan et nisi. Amet etiam eu dui quis nunc.</p>
      {/* Timeline goes here */}
    </div>
  )
}