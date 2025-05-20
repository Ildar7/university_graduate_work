!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '48727235-c018-4d5f-9b15-269f76f93e02', e._sentryDebugIdIdentifier = 'sentry-dbid-48727235-c018-4d5f-9b15-269f76f93e02'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6918], {
    6918: (e, t, n) => {
        n.r(t), n.d(t, { default: () => _ }); const r = n(5893); const s = n(4387); const d = n(4562); const i = n(4809); const l = n(7294); const a = n(6959); const c = n(5461); const o = n(1150); const u = n(918); const f = n(1759); const p = n(1817); const b = n(7882); const g = n(6648); const h = n(9250); const y = n(3009); const m = n(6458); const w = n(1138); const v = { EditStandardCurriculum: 'HopP9p3S', centered: 'tRIgdQ8E' }; let j = function () { return j = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, j.apply(this, arguments); }; const E = {
            standardCurriculumDetail: y.No, editStandardCurriculum: d.u4, specialties: a.Ys, eduModules: p.pt, qualifications: b.lg, settingsMainCollege: g.vW,
        }; const _ = function (e) {
            let t; let n; const p = e.className; const b = (0, c.T)(); const _ = (0, h.TH)().pathname.split('/'); const x = _[_.length - 1]; const S = (0, m.v9)(y.Rs); const I = (0, m.v9)(y.bV); return (0, l.useEffect)((() => { b(f.f$.setSort('id_spec')), b((0, a.kY)()), b((0, g.tb)()), b((0, y._N)(x)); }), [x, b]), n = S ? (0, r.jsx)(w.O, { width: '100%', height: 400 }) : I ? (0, r.jsx)(i.xv, {
                theme: i.lg.ERROR, size: i.yH.XL, weight: i.fs.SEMIBOLD, className: v.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(i.xv, {
                    className: v.title, size: i.yH.XL, weight: i.fs.SEMIBOLD, children: ['Типовой учебный план №', x],
                }), (0, r.jsx)(d.m6, {})],
            }), (0, r.jsx)(u.B, { title: 'LMS - Редактировать учебный план', children: (0, r.jsx)(o.W, { reducers: E, removeAfterUnmount: !0, children: (0, r.jsx)('div', { className: (0, s.A)(v.EditStandardCurriculum, (t = {}, t[v.centered] = !!I, t), [p]), children: n }) }) });
        };
    },
}]);
