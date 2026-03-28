/**
 * Unit tests for Chasket components
 * Using the chasket-test library to validate component compilation
 */

const fs = require('fs');
const path = require('path');
const { suite, compileOk } = require('../../chasket/chasket-cli/test/lib/chasket-test');

const srcDir = path.resolve(__dirname, '..', 'src');

/**
 * Helper: Read a component file and return its content
 */
function readComponent(relativePath) {
  return fs.readFileSync(path.join(srcDir, relativePath), 'utf-8');
}

// ============================================================================
// LAYOUT COMPONENTS
// ============================================================================

suite('Layout Components', (t) => {
  t.test('csk-shell compiles', () => {
    const src = readComponent('layout/csk-shell.csk');
    const result = compileOk(src, 'csk-shell.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'currentPage');
    t.outputIncludes(result, 'hashchange');
    t.hasOnMount(result, 'addEventListener');
    t.outputIncludes(result, 'getPage');
  });

  t.test('csk-navbar compiles', () => {
    const src = readComponent('layout/csk-navbar.csk');
    const result = compileOk(src, 'csk-navbar.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'menuOpen');
    t.hasState(result, 'scrolled');
    t.outputIncludes(result, 'scroll');
    t.hasOnMount(result, 'addEventListener');
    t.outputIncludes(result, 'toggleMenu');
  });

  t.test('csk-footer compiles', () => {
    const src = readComponent('layout/csk-footer.csk');
    const result = compileOk(src, 'csk-footer.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.outputIncludes(result, 'footer');
  });
});

// ============================================================================
// HOME PAGE COMPONENTS
// ============================================================================

suite('Home Page Components', (t) => {
  t.test('csk-hero compiles', () => {
    const src = readComponent('pages/home/csk-hero.csk');
    const result = compileOk(src, 'csk-hero.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'copied');
    t.outputIncludes(result, 'copyCmd');
    t.outputIncludes(result, 'navigator.clipboard');
  });

  t.test('csk-highlights compiles', () => {
    const src = readComponent('pages/home/csk-highlights.csk');
    const result = compileOk(src, 'csk-highlights.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.outputIncludes(result, 'icon');
  });

  t.test('csk-code-demo compiles', () => {
    const src = readComponent('pages/home/csk-code-demo.csk');
    const result = compileOk(src, 'csk-code-demo.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'activeTab');
    t.hasState(result, 'demoCount');
    t.hasState(result, 'todoItems');
    t.hasState(result, 'todoText');
    t.outputIncludes(result, 'cleanPre');
    t.outputIncludes(result, 'counter');
    t.outputIncludes(result, 'todo');
  });

  t.test('csk-features compiles', () => {
    const src = readComponent('pages/home/csk-features.csk');
    const result = compileOk(src, 'csk-features.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.outputIncludes(result, 'cleanPre');
  });

  t.test('csk-comparison compiles', () => {
    const src = readComponent('pages/home/csk-comparison.csk');
    const result = compileOk(src, 'csk-comparison.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-ecosystem compiles', () => {
    const src = readComponent('pages/home/csk-ecosystem.csk');
    const result = compileOk(src, 'csk-ecosystem.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-cta compiles', () => {
    const src = readComponent('pages/home/csk-cta.csk');
    const result = compileOk(src, 'csk-cta.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'copied');
    t.outputIncludes(result, 'copyCmd');
  });

  t.test('csk-page-home compiles', () => {
    const src = readComponent('pages/home/csk-page-home.csk');
    const result = compileOk(src, 'csk-page-home.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'csk-hero');
    t.templateIncludes(result, 'csk-features');
  });
});

// ============================================================================
// GUIDE PAGE COMPONENTS
// ============================================================================

suite('Guide Page Components', (t) => {
  t.test('csk-guide-file-structure compiles', () => {
    const src = readComponent('pages/guide/csk-guide-file-structure.csk');
    const result = compileOk(src, 'csk-guide-file-structure.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'code_fileStructure');
    t.templateIncludes(result, 'file-structure');
  });

  t.test('csk-guide-script compiles', () => {
    const src = readComponent('pages/guide/csk-guide-script.csk');
    const result = compileOk(src, 'csk-guide-script.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'code_stateExample');
    t.hasState(result, 'code_propExample');
    t.hasState(result, 'code_computedExample');
    t.hasState(result, 'code_fnExample');
    t.hasState(result, 'code_emitExample');
    t.hasState(result, 'code_watchExample');
    t.hasState(result, 'code_refExample');
    t.hasState(result, 'code_provideExample');
    t.hasState(result, 'code_consumeExample');
    t.hasState(result, 'code_typeExample');
    t.hasState(result, 'code_importExample');
  });

  t.test('csk-guide-template compiles', () => {
    const src = readComponent('pages/guide/csk-guide-template.csk');
    const result = compileOk(src, 'csk-guide-template.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'template');
  });

  t.test('csk-guide-style compiles', () => {
    const src = readComponent('pages/guide/csk-guide-style.csk');
    const result = compileOk(src, 'csk-guide-style.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'style');
  });

  t.test('csk-guide-communication compiles', () => {
    const src = readComponent('pages/guide/csk-guide-communication.csk');
    const result = compileOk(src, 'csk-guide-communication.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'component-comm');
  });

  t.test('csk-guide-security compiles', () => {
    const src = readComponent('pages/guide/csk-guide-security.csk');
    const result = compileOk(src, 'csk-guide-security.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'security');
  });

  t.test('csk-page-guide compiles', () => {
    const src = readComponent('pages/guide/csk-page-guide.csk');
    const result = compileOk(src, 'csk-page-guide.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'sidebarOpen');
    t.hasOnMount(result, 'updateActiveLink');
    t.hasOnMount(result, 'IntersectionObserver');
    t.templateIncludes(result, 'sidebar');
    t.templateIncludes(result, 'csk-guide');
  });
});

// ============================================================================
// API PAGE COMPONENTS
// ============================================================================

suite('API Page Components', (t) => {
  t.test('csk-api-compiler compiles', () => {
    const src = readComponent('pages/api/csk-api-compiler.csk');
    const result = compileOk(src, 'csk-api-compiler.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.templateIncludes(result, 'api');
  });

  t.test('csk-api-config compiles', () => {
    const src = readComponent('pages/api/csk-api-config.csk');
    const result = compileOk(src, 'csk-api-config.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-api-ecosystem compiles', () => {
    const src = readComponent('pages/api/csk-api-ecosystem.csk');
    const result = compileOk(src, 'csk-api-ecosystem.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-api-diagnostics compiles', () => {
    const src = readComponent('pages/api/csk-api-diagnostics.csk');
    const result = compileOk(src, 'csk-api-diagnostics.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-api-types compiles', () => {
    const src = readComponent('pages/api/csk-api-types.csk');
    const result = compileOk(src, 'csk-api-types.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-api-cli compiles', () => {
    const src = readComponent('pages/api/csk-api-cli.csk');
    const result = compileOk(src, 'csk-api-cli.csk');
    t.compileSuccess(result);
    t.validJS(result);
  });

  t.test('csk-page-api compiles', () => {
    const src = readComponent('pages/api/csk-page-api.csk');
    const result = compileOk(src, 'csk-page-api.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'sidebarOpen');
    t.hasOnMount(result, 'updateActiveLink');
    t.hasOnMount(result, 'IntersectionObserver');
    t.templateIncludes(result, 'sidebar');
  });
});

// ============================================================================
// TESTING PAGE COMPONENTS
// ============================================================================

suite('Testing Page Components', (t) => {
  t.test('csk-test-overview compiles', () => {
    const src = readComponent('pages/testing/csk-test-overview.csk');
    const result = compileOk(src, 'csk-test-overview.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'exampleOverview');
    t.hasState(result, 'exampleSetup');
    t.hasState(result, 'exampleQuick');
  });

  t.test('csk-test-api compiles', () => {
    const src = readComponent('pages/testing/csk-test-api.csk');
    const result = compileOk(src, 'csk-test-api.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'exampleAPI');
  });

  t.test('csk-test-compile compiles', () => {
    const src = readComponent('pages/testing/csk-test-compile.csk');
    const result = compileOk(src, 'csk-test-compile.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'exampleCompile');
  });

  t.test('csk-test-assertions compiles', () => {
    const src = readComponent('pages/testing/csk-test-assertions.csk');
    const result = compileOk(src, 'csk-test-assertions.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'exampleAssert');
    t.hasState(result, 'exampleOutput');
    t.hasState(result, 'exampleTemplate');
    t.hasState(result, 'exampleState');
    t.hasState(result, 'exampleDiag');
  });

  t.test('csk-test-example compiles', () => {
    const src = readComponent('pages/testing/csk-test-example.csk');
    const result = compileOk(src, 'csk-test-example.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'exampleFull');
  });

  t.test('csk-page-testing compiles', () => {
    const src = readComponent('pages/testing/csk-page-testing.csk');
    const result = compileOk(src, 'csk-page-testing.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'sidebarOpen');
    t.hasOnMount(result, 'updateActiveLink');
    t.hasOnMount(result, 'IntersectionObserver');
    t.templateIncludes(result, 'sidebar');
    t.templateIncludes(result, 'csk-test');
  });
});

// ============================================================================
// WHY PAGE
// ============================================================================

suite('Why Page', (t) => {
  t.test('csk-page-why compiles', () => {
    const src = readComponent('pages/why/csk-page-why.csk');
    const result = compileOk(src, 'csk-page-why.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'codeExample');
    t.hasState(result, 'codeOutput');
    t.templateIncludes(result, 'why-hero');
    t.templateIncludes(result, 'why-card');
  });
});

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

suite('Shared Components', (t) => {
  t.test('csk-copy-btn compiles', () => {
    const src = readComponent('shared/csk-copy-btn.csk');
    const result = compileOk(src, 'csk-copy-btn.csk');
    t.compileSuccess(result);
    t.validJS(result);
    t.hasState(result, 'copied');
    t.outputIncludes(result, 'copy');
    t.outputIncludes(result, 'navigator.clipboard');
  });

  t.test('csk-copy-btn has conditional rendering', () => {
    const src = readComponent('shared/csk-copy-btn.csk');
    const result = compileOk(src, 'csk-copy-btn.csk');
    t.templateIncludes(result, 'svg');
    t.templateIncludes(result, 'button');
  });
});

// ============================================================================
// RUN ALL TESTS
// ============================================================================

suite.run();
