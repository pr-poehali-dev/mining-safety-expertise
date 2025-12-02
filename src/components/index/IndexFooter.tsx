import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const IndexFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-3 mb-4 transition-opacity hover:opacity-80"
            >
              <img
                src="https://cdn.poehali.dev/files/35047487-09a0-4e51-86f1-5e184b7d5afa.png"
                alt="СПЭК"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold leading-tight">
                  Сибирская Проектная
                </span>
                <span className="font-heading text-sm font-bold leading-tight text-white/90">
                  Экспертная Компания
                </span>
              </div>
            </button>
            <p className="text-white/80 text-sm">
              Предоставление комплексных инжиниринговых услуг для предприятий
              горной промышленности
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-white transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-white transition-colors"
                >
                  О компании
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="hover:text-white transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/certificates")}
                  className="hover:text-white transition-colors"
                >
                  Квалификация
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button
                  onClick={() => navigate("/news")}
                  className="hover:text-white transition-colors"
                >
                  Новости
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/vacancies")}
                  className="hover:text-white transition-colors"
                >
                  Вакансии
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/objects-map")}
                  className="hover:text-white transition-colors"
                >
                  Карта объектов
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contacts")}
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+7 (3952) 655-943</li>
              <li>655943@mail.ru</li>
              <li>Иркутск, ул. Дзержинского, 1, оф. 224</li>
            </ul>
          </div>
        </div>
        <Separator className="bg-white/20 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © 2024 Сибирская Проектная Экспертная Компания. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndexFooter;
