import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [inputTask, setInputTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const defaultTasks = t("tasks", { returnObjects: true });
    setTasks(defaultTasks);
  }, [i18n.language]);

  const getFormattedDate = (lang) => {
    const options = { weekday: "long", day: "numeric", month: "long" };
    return new Date().toLocaleDateString(lang, options);
  };

  const handleInput = () => {
    setShowInput(true);
  };

  const handleCheckbox = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    setShowInput(false);
  };

  const handleTaskKeyDown = (event) => {
    if (event.key === "Enter" && inputTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: inputTask, checked: false }]);
      setInputTask("");
      setShowInput(false);
    }
  };

  const myTasks = tasks.map((task, index) => (
    <li
      className="cursor-pointer border-2 border-zzlink w-full flex flex-row py-3 px-4 mt-3 hover:scale-110 transition duration-200 active:scale-100"
      key={index}
      onClick={() => handleCheckbox(index)}
    >
      <input
        className="peer self-center w-6 md:w-5 h-5 appearance-none border-2 border-zzlink checked:border-emerald-500 checked:after:text-emerald-500 relative after:content-['+'] after:absolute after:top-[0px] after:left-[6px] md:after:left-[5px] after: after:text-xs checked:after:opacity-100 after:opacity-0"
        type="checkbox"
        name={`todo[${index}]`}
        checked={task.checked}
        onChange={() => handleCheckbox(index)}
      />
      <span className="o-underline  appearance-none peer-checked:line-through decoration-2 w-full ml-2">
        {task.text}
      </span>
      <button
        className="px-1.5 border-2 visible peer-checked:hidden text-red-500 md:text-zzlink hover:text-red-500 font-extrabold hover:scale-105 transition duration-200 active:scale-100"
        onClick={(e) => {
          e.stopPropagation();
          setTasks(tasks.filter((task) => task.id !== tasks[index].id));
        }}
      >
        <p className="rotate-45">+</p>
      </button>
    </li>
  ));

  return (
    <>
      <div className="relative w-full h-[400px] p-3 md:p-10 overflow-scroll text-zzlink border-2 border-zzlink mx-auto">
        <div className="absolute top-3 md:top-10 left-3 right-3 md:left-10 md:right-10 max-w-lg">
          {!showInput && (
            <div className="flex flex-row justify-between align-middle w-full ">
              <span className="block">
                <h1 className="text-2xl md:text-4xl font-extrabold ">
                  {t("UiUxLab.p12")}
                </h1>
                <p className="text-sm font-light">{t("UiUxLab.p13")}</p>
              </span>
              <button
                className="p-4 w-15 hover:bg-zzlink border-2 border-zzlink font-extrabold  hover:text-white hover:scale-110 transition duration-200 active:scale-100"
                onClick={handleInput}
              >
                +
              </button>
            </div>
          )}

          {showInput && (
            <div
              className={`w-full md:transition-transform ease-out duration-1000 ${
                showInput
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <input
                className="w-full border-2 py-4 px-3 border-zzlink  focus:border-zzlink focus: hover:scale-105 transition duration-200 active:scale-100"
                placeholder={t("UiUxLab.p11")}
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                onKeyDown={handleTaskKeyDown}
              />
            </div>
          )}
        </div>
        <div className="w-full relative top-20">
          <span className="block">
            <p className=" py-3 text-sm">{getFormattedDate(i18n.language)}</p>
          </span>
          <ul className="flex flex-col-reverse ">{myTasks}</ul>
          <div className="h-10 w-full "></div>
        </div>
      </div>
    </>
  );
}

export default App;
