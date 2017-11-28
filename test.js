import test from 'ava';
import m from './index';

const asserts = [
	['Điều 7', 'Diều 7'],
	['Ngôn ngữ dùng trong nhà trường và cơ sở giáo dục khác;', 'Qôn qữ zùq coq n\'à cườq và kơ sở záo zụk xák;'],
	['dạy và học tiếng nói, chữ viết của dân tộc thiểu số;', 'zạy và họk tiếq nói, cữ viết kủa zân tộk wiểu số;'],
	['dạy ngoại ngữ.', 'zạy qoại qữ.'],
	['Tiếng Việt giàu và đẹp. Đùa đấy ahihi đồ ngốk.', 'Tiếq Việt zàu và dẹp. Dùa dấy ahihi dồ qốk.'],
	['TRƯỜNG GIÁO DỤC ĐẠI HỌC CHỮ TO', 'CƯỜQ ZÁO ZỤK DẠI HỌK CỮ TO'],
	['CHỮ TÀI CHỮ MỆNH KHÉO LÀ GHÉT NHAU', 'CỮ TÀI CỮ MỆN\' XÉO LÀ GÉT N\'AU'],
	['Cái gì thế này', 'Kái zì wế này'],
	['CÁI GÌ THẾ NÀY', 'KÁI ZÌ WẾ NÀY']
];

test('title', t => {
	const err = t.throws(() => {
		m(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	asserts.forEach(a => {
		t.is(m(a[0]), a[1]);
	});
});
