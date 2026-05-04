/**
 * Enterprise FizzBuzz Solution™
 * Version 2.0.0-RELEASE-CANDIDATE-1
 *
 * This solution follows industry-standard Enterprise Architecture Patterns
 * to ensure maximum scalability, maintainability, and job security.
 */

// ===== Configuration Layer =====

class FizzBuzzConfiguration {
  constructor() {
    this.rangeStart = 1;
    this.rangeEnd = 100;
    this.rules = [];
  }
}

class FizzBuzzConfigurationBuilder {
  constructor() {
    this.configuration = new FizzBuzzConfiguration();
  }

  withRangeStart(start) {
    this.configuration.rangeStart = start;
    return this;
  }

  withRangeEnd(end) {
    this.configuration.rangeEnd = end;
    return this;
  }

  withRule(rule) {
    this.configuration.rules.push(rule);
    return this;
  }

  build() {
    return Object.freeze(this.configuration);
  }
}

// ===== Rule Engine Layer =====

class AbstractFizzBuzzRule {
  constructor(divisor, replacement) {
    if (new.target === AbstractFizzBuzzRule) {
      throw new Error("Cannot instantiate AbstractFizzBuzzRule directly");
    }
    this.divisor = divisor;
    this.replacement = replacement;
  }

  appliesTo(number) {
    return number % this.divisor === 0;
  }

  getOutput() {
    return this.replacement;
  }
}

class FizzRule extends AbstractFizzBuzzRule {
  constructor() {
    super(3, "Fizz");
  }
}

class BuzzRule extends AbstractFizzBuzzRule {
  constructor() {
    super(5, "Buzz");
  }
}

class RuleFactory {
  static createRule(type) {
    const ruleRegistry = {
      fizz: () => new FizzRule(),
      buzz: () => new BuzzRule(),
    };

    const creator = ruleRegistry[type.toLowerCase()];
    if (!creator) {
      throw new Error(`Unknown rule type: ${type}. Please consult the RuleFactory documentation.`);
    }
    return creator();
  }
}

// ===== Number Evaluation Service Layer =====

class NumberEvaluationStrategy {
  evaluate(number, rules) {
    let result = "";
    for (const rule of rules) {
      if (rule.appliesTo(number)) {
        result += rule.getOutput();
      }
    }
    return result || String(number);
  }
}

class NumberEvaluationStrategyFactory {
  static createStrategy() {
    return new NumberEvaluationStrategy();
  }
}

class NumberEvaluationService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  evaluateNumber(number, rules) {
    return this.strategy.evaluate(number, rules);
  }
}

class NumberEvaluationServiceProvider {
  static getService() {
    const strategy = NumberEvaluationStrategyFactory.createStrategy();
    return new NumberEvaluationService(strategy);
  }
}

// ===== Output Adapter Layer =====

class AbstractOutputAdapter {
  write(line) {
    throw new Error("Subclass must implement write()");
  }
}

class ConsoleOutputAdapter extends AbstractOutputAdapter {
  write(line) {
    console.log(line);
  }
}

class OutputAdapterFactory {
  static createAdapter(type) {
    if (type === "console") {
      return new ConsoleOutputAdapter();
    }
    throw new Error(`Unsupported output adapter type: ${type}`);
  }
}

// ===== Range Iterator Layer =====

class RangeIteratorBuilder {
  constructor() {
    this.start = 0;
    this.end = 0;
  }

  from(start) {
    this.start = start;
    return this;
  }

  to(end) {
    this.end = end;
    return this;
  }

  build() {
    const start = this.start;
    const end = this.end;
    return {
      [Symbol.iterator]() {
        let current = start;
        return {
          next() {
            if (current <= end) {
              return { value: current++, done: false };
            }
            return { done: true };
          },
        };
      },
    };
  }
}

// ===== Application Orchestrator =====

class FizzBuzzApplicationOrchestrator {
  constructor(configuration, evaluationService, outputAdapter) {
    this.configuration = configuration;
    this.evaluationService = evaluationService;
    this.outputAdapter = outputAdapter;
  }

  execute() {
    const range = new RangeIteratorBuilder()
      .from(this.configuration.rangeStart)
      .to(this.configuration.rangeEnd)
      .build();

    for (const number of range) {
      const result = this.evaluationService.evaluateNumber(
        number,
        this.configuration.rules
      );
      this.outputAdapter.write(result);
    }
  }
}

class FizzBuzzApplicationOrchestratorFactory {
  static create(configuration) {
    const evaluationService = NumberEvaluationServiceProvider.getService();
    const outputAdapter = OutputAdapterFactory.createAdapter("console");
    return new FizzBuzzApplicationOrchestrator(
      configuration,
      evaluationService,
      outputAdapter
    );
  }
}

// ===== Bootstrap =====

function main() {
  const configuration = new FizzBuzzConfigurationBuilder()
    .withRangeStart(1)
    .withRangeEnd(100)
    .withRule(RuleFactory.createRule("fizz"))
    .withRule(RuleFactory.createRule("buzz"))
    .build();

  const orchestrator =
    FizzBuzzApplicationOrchestratorFactory.create(configuration);

  orchestrator.execute();
}

main();
