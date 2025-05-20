!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'f7f39cd3-7679-4a4b-9291-78a1bfec506a', e._sentryDebugIdIdentifier = 'sentry-dbid-f7f39cd3-7679-4a4b-9291-78a1bfec506a'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[2607], {
    3561: (e, t, n) => {
        n.r(t), n.d(t, { default: () => h }); const r = n(5893); const o = n(4387); const a = n(918); const s = n(1150); const u = n(9649); const f = n(7294); const c = n(6458); const d = n(5375); const i = n(5461); const l = n(1134); const b = n(5306); const p = n(7730); const y = n(9086); const m = { modules: 'DYM5Y7LW' }; let g = function () { return g = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const o in t = arguments[n])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e; }, g.apply(this, arguments); }; const v = { standardCurriculum: l.YU }; const h = function (e) {
            const t = e.className; const n = (0, f.useState)(''); const h = n[0]; const j = n[1]; const x = (0, f.useState)(); const w = x[0]; const S = x[1]; const E = (0, i.T)(); const _ = (0, c.v9)(l.Hu); const k = (0, c.v9)(l.Fu); const D = (0, c.v9)(l.oV); const C = (0, f.useCallback)(((e) => { j(e); }), []); return (0, f.useEffect)((() => { S(_ || []); }), [_]), (0, f.useEffect)((() => { const e = (0, p.LW)(h, _ || []); S(e || []); }), [_, h]), (0, f.useEffect)((() => { E((0, l.ko)()); }), [E]), (0, r.jsx)(a.B, {
                title: 'LMS - Типовой учебный план',
                children: (0, r.jsxs)(s.W, {
                    reducers: v,
                    removeAfterUnmount: !0,
                    children: [(0, r.jsxs)('div', {
                        className: (0, o.A)(m.StandardCurriculumPage, {}, [t]),
                        children: [(0, r.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, r.jsx)(u.o, {
                                value: h, onChange: C, searchText: 'Поиск по шифру и названию специальности', error: D, isLoading: k,
                            }), (0, r.jsx)(b.X, {
                                onlyAdding: !0, addingModalText: 'Добавить учебный план', error: D, isLoading: k, pathname: (0, y.RD)(), children: (0, r.jsx)(r.Fragment, {}),
                            })],
                        }), (0, r.jsx)(l.Qi, { data: w || [], exportDisabled: !0 })],
                    }), D && (0, r.jsx)(d.d, { error: D })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => f }); const r = n(5893); const o = n(7294); const a = n(530); const s = n(4475); function u(e) { return u = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, u(e); } var f = (0, o.memo)(((e) => { const t = e.error; const n = (0, o.useState)(); const f = n[0]; const c = n[1]; const d = (0, o.useRef)(null); return (0, o.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || u(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(a.F.error('Соединение с сервером потеряно')); }), [t]), (0, r.jsx)(s.KF, { ref: d, push: f, placement: 'top-end' }); })); },
}]);
