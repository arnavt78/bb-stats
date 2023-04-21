const exportCSV = document.querySelector(".export-csv");
const wholeTable = document.querySelector(".whole-table");

const arrayToCSV = (data) => {
  return data
    .map((row) =>
      row
        .map(String)
        .map((v) => v.replaceAll('"', '""'))
        .map((v) => `"${v}"`)
        .join(",")
    )
    .join("\r\n");
};

const downloadBlob = (content, filename, contentType) => {
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  var pom = document.createElement("a");
  pom.href = url;
  pom.setAttribute("download", filename);
  pom.click();
};

exportCSV.addEventListener("click", () => {
  const rows = [...wholeTable.rows].map((r) => {
    return [...r.querySelectorAll("td, th")].map((td) => {
      if (td?.className?.includes("assists-name") || td?.getAttribute("scope")) {
        return td.textContent.toLowerCase() === "actions" ? "" : td.textContent;
      } else if (td?.children[0]?.children[1]?.children[0]) {
        return td.children[0].children[1].children[0].textContent;
      } else if (td?.children[0]?.className?.includes("total")) {
        return td.children[0].textContent;
      } else if (td?.children[0]?.className?.includes("delete")) {
        return "";
      }
    });
  });

  const csv = arrayToCSV(rows);

  const date = new Date();
  const fileName = `${TEAM_NAME.value ? TEAM_NAME.value : "Data"} - ${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}.csv`;
  downloadBlob(csv, fileName, "text/csv;charset=utf-8;");
});
