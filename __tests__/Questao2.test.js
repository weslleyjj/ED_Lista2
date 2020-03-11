import Questao2 from "../src/Questao2";

    let f;

    beforeEach(() => {
        f = new Questao2();
    });

    test("inserindo", () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        expect(f.front()).toBe(1);
    });

    test("removendo", () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        expect(f.dequeue()).toBe(1);
        expect(f.front()).toBe(2);
    });