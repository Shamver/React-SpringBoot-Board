package kr.co.board.mapper;

import kr.co.board.vo.FamilyVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface FamilyMapper {
    List<FamilyVO> getFamilyList();
    int addFamily(FamilyVO family);
}
