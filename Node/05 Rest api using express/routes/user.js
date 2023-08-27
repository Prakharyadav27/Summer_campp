const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.end("HOMEPAGE");
// });

router.get("/", async (req, res) => {
  const AlldbUser = await User.find({});
  return res.json(AlldbUser);
});

// router.get("/users", async (req, res) => {
//   const AlldbUser = await User.find({});
//   const HTML = `<ul>
//       ${AlldbUser.map(
//         (user) => `<li>${user.first_name} - ${user.email}</li>`
//       ).join("")}
//     </ul>`;

//   res.end(HTML);
// });

router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
  })
  .patch((req, res) => {
    // TO-DO
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    // TO-DO
    return res.json({ status: "Pending" });
  });

router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All feilds are required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log(result);

  return res.status(201).json({ msg: "sucsses" });
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./Mock_data.json", JSON.stringify(users), () => {
  //   res.status(201).json({ status: "Completed" });
  // });
});

module.exports = router;
