const IndexHero = () => {
  return (
    <section id="home" className="relative py-16 bg-white">
      <div className="container max-w-6xl">
        <div className="space-y-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Добро пожаловать на сайт компании «СПЭК»!
          </h1>

          <p className="text-lg text-muted-foreground">
            Мы — команда профессионалов, специализирующихся на горных
            производствах. Наша миссия — предоставлять комплексные инженерные
            решения, которые помогают нашим клиентам достигать высоких
            результатов в горнодобывающей отрасли.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Что мы предлагаем:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Проектирование и инжиниринг:
                    </strong>{" "}
                    от разработки концепции до реализации проектов в
                    горнодобывающей отрасли.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Технологические решения:
                    </strong>{" "}
                    внедрение передовых технологий для повышения эффективности и
                    безопасности горных работ.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Экспертиза промышленной безопасности:
                    </strong>{" "}
                    экспертиза документации на техническое перевооружение,
                    консервацию и ликвидацию опасных производственных объектов,
                    экспертиза технических устройств. Мы проводим тщательный
                    анализ и оценку рисков, разрабатываем меры по их минимизации
                    и внедряем современные системы управления безопасностью..
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Консультации и поддержка:
                    </strong>{" "}
                    экспертные консультации на всех этапах реализации проектов.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Почему выбирают нас:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Опыт и экспертиза:
                    </strong>{" "}
                    многолетний опыт работы в горнодобывающей отрасли и глубокие
                    знания в области инжиниринга.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Индивидуальный подход:
                    </strong>{" "}
                    разработка решений, учитывающих уникальные потребности
                    каждого клиента.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Инновации:</strong>{" "}
                    использование передовых технологий и методов для достижения
                    наилучших результатов.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Надежность и качество:
                    </strong>{" "}
                    строгий контроль качества на всех этапах работы.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Наши ценности:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Ответственность:
                    </strong>{" "}
                    мы несем ответственность за каждый проект и его результаты.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Профессионализм:
                    </strong>{" "}
                    высокий уровень квалификации наших специалистов.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">
                      Клиентоориентированность:
                    </strong>{" "}
                    удовлетворение потребностей клиентов — наш приоритет.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexHero;
