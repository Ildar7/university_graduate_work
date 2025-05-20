!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const d = (new Error()).stack; d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = '9dddc7e1-1b4c-4d90-9eba-cd28f1362569', e._sentryDebugIdIdentifier = 'sentry-dbid-9dddc7e1-1b4c-4d90-9eba-cd28f1362569'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[3645], {
    3645: (e, d, n) => {
        n.r(d), n.d(d, { default: () => v }); const t = n(5893); const r = n(4387); const s = n(321); const c = n(4809); const i = n(7294); const a = n(6959); const o = n(5461); const l = n(1150); const u = n(918); const f = n(1759); const b = n(1817); const p = n(7882); const y = n(6648); const g = { AddStandardCurriculum: 'SOhkXf7y' }; let h = function () { return h = Object.assign || function (e) { for (var d, n = 1, t = arguments.length; n < t; n++) for (const r in d = arguments[n])Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]); return e; }, h.apply(this, arguments); }; const w = {
            addStandardCurriculum: s.oE, specialties: a.Ys, eduModules: b.pt, qualifications: p.lg, settingsMainCollege: y.vW,
        }; const v = function (e) {
            const d = e.className; const n = (0, o.T)(); return (0, i.useEffect)((() => { n(f.f$.setSort('id_spec')), n((0, a.kY)()), n((0, y.tb)()); }), [n]), (0, t.jsx)(u.B, {
                title: 'LMS - Добавить учебный план',
                children: (0, t.jsx)(l.W, {
                    reducers: w,
                    removeAfterUnmount: !0,
                    children: (0, t.jsxs)('div', {
                        className: (0, r.A)(g.AddStandardCurriculum, {}, [d]),
                        children: [(0, t.jsx)(c.xv, {
                            className: g.title, size: c.yH.XL, weight: c.fs.SEMIBOLD, children: 'Новый типовой учебный план',
                        }), (0, t.jsx)(s.yT, {})],
                    }),
                }),
            });
        };
    },
}]);
