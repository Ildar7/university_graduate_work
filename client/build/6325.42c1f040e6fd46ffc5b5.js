!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '30d91654-961a-4959-9aa2-6a8758ea9504', e._sentryDebugIdIdentifier = 'sentry-dbid-30d91654-961a-4959-9aa2-6a8758ea9504'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6325], {
    6038: (e, t, n) => {
        n.r(t), n.d(t, { default: () => w }); const r = n(5893); const o = n(918); const u = n(1150); const s = n(9649); const i = n(5306); const a = n(5461); const c = n(7294); const d = n(6458); const l = n(7730); const f = n(5149); const b = n(4387); const p = n(4514); const y = n(6461); const m = n(5375); const g = n(5307); const j = n(1817); const v = {}; let S = function () { return S = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const o in t = arguments[n])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e; }, S.apply(this, arguments); }; const h = {
            curriculumSubjects: f.IN, curriculumSubjectsDetail: y.Ux, addCurriculumSubject: p.qd, editCurriculumSubject: g.Ad, eduModules: j.pt,
        }; const w = function (e) {
            const t = e.className; const n = (0, a.T)(); const y = (0, c.useState)(!1); const g = y[0]; const w = y[1]; const x = (0, d.v9)(f.s4); const E = (0, d.v9)(f.TD); const _ = (0, d.v9)(f.lK); const C = (0, c.useState)(''); const D = C[0]; const k = C[1]; const A = (0, c.useState)(); const I = A[0]; const N = A[1]; const T = (0, c.useCallback)(((e) => { k(e); }), []); return (0, c.useEffect)((() => { N(x || []); }), [x]), (0, c.useEffect)((() => { const e = (0, l.yG)(D, x || []); N(e || []); }), [x, D]), (0, c.useEffect)((() => { n((0, f.zE)()), n((0, j.Eb)()), n((0, j.$w)()); }), [n]), (0, r.jsx)(o.B, {
                title: 'LMS - Дисциплины',
                children: (0, r.jsxs)(u.W, {
                    reducers: h,
                    removeAfterUnmount: !0,
                    children: [(0, r.jsxs)('div', {
                        className: (0, b.A)(v.CurriculumSubjectsPage, {}, [t]),
                        children: [(0, r.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, r.jsx)(s.o, {
                                value: D, onChange: T, searchText: 'Поиск по названию', error: _, isLoading: E,
                            }), (0, r.jsx)(i.X, {
                                onlyAdding: !0, setVisibleAddNewField: w, addingModalText: 'Добавить дисциплину', error: _, isLoading: E, children: (0, r.jsx)(p._0, { visible: g, setVisible: w }),
                            })],
                        }), (0, r.jsx)(f.ZU, { data: I || [], exportDisabled: !0 })],
                    }), _ && (0, r.jsx)(m.d, { error: _ })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => a }); const r = n(5893); const o = n(7294); const u = n(530); const s = n(4475); function i(e) { return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, i(e); } var a = (0, o.memo)(((e) => { const t = e.error; const n = (0, o.useState)(); const a = n[0]; const c = n[1]; const d = (0, o.useRef)(null); return (0, o.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || i(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(u.F.error('Соединение с сервером потеряно')); }), [t]), (0, r.jsx)(s.KF, { ref: d, push: a, placement: 'top-end' }); })); },
}]);
