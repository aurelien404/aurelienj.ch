import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);

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
      className="border-2 border-zzlink w-full flex flex-row text-zzbase py-3 px-4 mt-3 hover:scale-110 transition duration-200 active:scale-100"
      key={index}
      onClick={() => handleCheckbox(index)}
    >
      <input
        className="peer self-center w-6 md:w-5 h-5 appearance-none border-2 border-zzlink checked:border-emerald-500 checked:after:text-emerald-500 relative after:content-['x'] after:absolute after:top-[0px] after:left-[6px] after:text-zzlink after:text-xs checked:after:opacity-100 after:opacity-0"
        type="checkbox"
        name={`todo[${index}]`}
        checked={task.checked}
        onChange={() => handleCheckbox(index)}
      />
      <span className="o-underline text-zzlink appearance-none peer-checked:line-through decoration-2 w-full ml-2">
        {task.text}
      </span>
      <button
        className="visible peer-checked:hidden text-zzlink hover:text-red-500 font-extrabold"
        onClick={(e) => {
          e.stopPropagation(); // Empêche le clic d'affecter le <li>
          setTasks(tasks.filter((task) => task.id !== tasks[index].id)); // Supprime uniquement la tâche sélectionnée
        }}
      >
        X
      </button>
    </li>
  ));

  return (
    <>
      <div className="relative w-full max-w-lg h-[300px] md:h-[400px] p-3 md:p-10 overflow-scroll border-2 border-zzlink inline-block mx-auto gap-6">
        <div className="w-full bg-amber-800">
          {!showInput && (
            <button
              className="absolute z-5 right-3 md:right-10 p-4 w-15 hover:bg-zzlink border-2 border-zzlink font-extrabold text-zzlink hover:text-white hover:scale-110 transition duration-350 active:scale-100"
              onClick={handleInput}
            >
              +
            </button>
          )}

          {showInput && (
            <div
              className={`w-[calc(100%-1.5rem)] md:w-[calc(100%-5rem)] absolute z-5 right-3 md:transition-transform ease-out duration-1000 ${
                showInput
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <input
                className="w-full bg-zzcontrast border-2 py-4 px-3 border-zzlink text-zzlink focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100"
                placeholder={t("UiUxLab.p11")}
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                onKeyDown={handleTaskKeyDown}
              />
            </div>
          )}
        </div>
        <div className="w-full relative top-15">
          <p className="text-zzlink py-3 text-sm">
            {getFormattedDate(i18n.language)}
          </p>
          <ul className="flex flex-col-reverse">{myTasks}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
